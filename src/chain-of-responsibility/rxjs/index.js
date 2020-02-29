const { fromEvent, operators, ajax } = rxjs;
const { map, tap, pluck, filter, switchMap, debounceTime, distinctUntilChanged } = operators;
const { get } = ajax.ajax;

const searchBar = document.getElementById("search-bar");
const searchResult = document.getElementById("search-result");

const displayResult = (titles = []) => searchResult.innerHTML = titles.map(title => `<li><h3>${title}</h3></li>`).join('');
const clearList = () => searchResult.innerHTML = '';

fromEvent(searchBar, 'input').pipe(
  tap(clearList),
  pluck('target', 'value'),
  filter(searchString => searchString.length > 2),
  debounceTime(500),
  distinctUntilChanged(),
  switchMap(searchString => get(`https://api.crossref.org/works?rows=10&query.author=${searchString}`)),
  map(({ status, response }) => ({
    status: status === 200,
    details: status === 200 ? response.message.items : [],
    result_hash: Date.now()
  })),
  filter(({ status }) => status !== false),
  distinctUntilChanged((a, b) => a.result_hash === b.result_hash),
  map(({ details }) => details.map(d => d.publisher)),
  tap(displayResult)
).subscribe();
