module.exports = {
  name: 'features-flights',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/features/flights',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
