module.exports = {
  name: 'flight',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flight',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
