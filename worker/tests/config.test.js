const config = require('../src/config');

describe('Worker Config Module', () => {
  test('exports required configuration fields', () => {
    expect(config).toHaveProperty('db');
    expect(config).toHaveProperty('github');
    expect(config).toHaveProperty('fetchCron');
  });

  test('database config has required connection fields', () => {
    expect(config.db).toHaveProperty('host');
    expect(config.db).toHaveProperty('port');
    expect(config.db).toHaveProperty('database');
    expect(config.db).toHaveProperty('user');
    expect(config.db).toHaveProperty('password');
  });

  test('fetch cron schedule is a valid string', () => {
    expect(typeof config.fetchCron).toBe('string');
    expect(config.fetchCron.length).toBeGreaterThan(0);
  });
});
