module.exports = {
  name: 'gyroscope',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gyroscope',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
