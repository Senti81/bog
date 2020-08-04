
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          userName: 'Wasser',
          email: 'wasser@servebeer.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
          role: 'ADMIN'
        },
        {
          userName: 'Hefe',
          email: 'hefe@servebeer.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        },
        {
          userName: 'Hopfen',
          email: 'hopfen@servebeer.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        },
        {
          userName: 'Malz',
          email: 'malz@servebeer.com',
          password: '$2y$10$SaR8xEQF9Fe0.atiFa6ZbOMNxR.aq//p1FcqAd4v.7ZOrWUx53Fha',
        }
      ]);
    });
};
