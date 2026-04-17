const config = require('../src/config');

describe('Config Module', () => {
  test('exports required configuration fields', () => {
    expect(config).toHaveProperty('port');
    expect(config).toHaveProperty('nodeEnv');
    expect(config).toHaveProperty('db');
    expect(config).toHaveProperty('jwt');
    expect(config).toHaveProperty('corsOrigin');
  });

  test('database config has required fields', () => {
    expect(config.db).toHaveProperty('host');
    expect(config.db).toHaveProperty('port');
    expect(config.db).toHaveProperty('database');
    expect(config.db).toHaveProperty('user');
    expect(config.db).toHaveProperty('password');
  });

  test('jwt config has secret and expiry', () => {
    expect(config.jwt).toHaveProperty('secret');
    expect(config.jwt).toHaveProperty('expiresIn');
    expect(typeof config.jwt.secret).toBe('string');
    expect(config.jwt.secret.length).toBeGreaterThan(0);
  });

  test('port is a valid number', () => {
    expect(Number.isInteger(Number(config.port))).toBe(true);
  });
});
