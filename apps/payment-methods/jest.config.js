module.exports = {
  name: 'payment-methods',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/payment-methods',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
