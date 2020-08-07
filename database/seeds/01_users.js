
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          userName: 'BierBaron',
          email: 'admin@app.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
          role: 'ADMIN'
        },
        {
          userName: 'User A',
          email: 'user_a@app.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        },
        {
          userName: 'User B',
          email: 'user_b@app.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        },
        {
          userName: 'User C',
          email: 'user_c@app.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        }
      ]);
    });
};
