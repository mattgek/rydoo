module.exports = {
  name: 'ui-compass',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/compass',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
