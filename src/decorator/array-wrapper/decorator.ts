import 'reflect-metadata';

const METADATA_MARKER = Symbol('WRAP_IN_ARRAY_DECORATOR_MARKER_NAME');

export function wrap(target, key, index) {
  Reflect.defineMetadata(METADATA_MARKER, index, target, key);
  // console.log(Reflect.getMetadataKeys(target, key)); // - check for existed metadata keys
};

export function arrayWrapper(target, key, descriptor) {

  if (Reflect.hasMetadata(METADATA_MARKER, target, key)) {
    const originMethod = descriptor.value;
    const i = Reflect.getOwnMetadata(METADATA_MARKER, target, key);

    descriptor.value = function () {
      arguments[i] = Array.isArray(arguments[i]) ? arguments[i] : [arguments[i]];
      return originMethod.apply(this, arguments);
    };
  }
};
