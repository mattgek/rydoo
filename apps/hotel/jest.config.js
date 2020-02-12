module.exports = {
  name: 'hotel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hotel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
