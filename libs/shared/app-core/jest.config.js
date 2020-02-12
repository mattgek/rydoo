module.exports = {
  name: 'shared-app-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/app-core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
