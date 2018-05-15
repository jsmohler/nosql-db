function(doc) {
  if ('name' in doc && 'random' in doc) {
    emit(doc.random, doc.name);
  }
}
