const versionCompare = require('./index');
test('compare inputs', () => {
    expect(versionCompare('1.1.1', '1.0.1')).toBe('downgrade');
    expect(versionCompare('1.1.1', '1.1.1')).toBe('stable');
    expect(versionCompare('1.1.0', '1.1.1')).toBe('upgrade');
});
