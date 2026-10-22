// Example teams and matches that organizers can load with one click to try the page.
// Every document carries example: true so "Clear examples" can remove them later.
const cat = (id, label, order) => ['categories', id, { label, order, example: true }]
const team = (id, name, c, hue) => ['teams', id, { name, cat: c, hue, example: true }]
const match = (id, c, a, b, ends, status, lane, order) =>
  ['matches', id, { cat: c, a, b, ends, status, round: 'Pool', lane, order, example: true }]

// Sled results are stored in milliseconds, grip results in kilograms.
// "min" is how many minutes ago the attempt was recorded.
const sled = (id, name, mode, ms, min) =>
  ['sled', id, { name, mode, ms, at: Date.now() - min * 60000, example: true }]
const grip = (id, name, kg, min) =>
  ['grip', id, { name, kg, at: Date.now() - min * 60000, example: true }]

export function exampleDocs() {
  return [
    sled('s01', 'Aiden Tan', 'pull', 14820, 50),
    sled('s02', 'Marcus Lim', 'pull', 13970, 46),
    sled('s03', 'Priya Nair', 'pull', 16400, 42),
    sled('s04', 'Daniel Koh', 'pull', 15330, 38),
    sled('s05', 'Marcus Lim', 'pull', 14200, 22),
    sled('s06', 'Aiden Tan', 'push', 12080, 34),
    sled('s07', 'Marcus Lim', 'push', 11450, 30),
    sled('s08', 'Priya Nair', 'push', 13900, 26),
    sled('s09', 'Daniel Koh', 'push', 12910, 18),
    grip('g01', 'Aiden Tan', 62.5, 40),
    grip('g02', 'Marcus Lim', 71, 36),
    grip('g03', 'Priya Nair', 48, 32),
    grip('g04', 'Daniel Koh', 66.5, 28),
    grip('g05', 'Priya Nair', 51.5, 14),
    grip('g06', 'Marcus Lim', 69, 10),
    cat('c540', 'Mixed 540 kg', 1),
    cat('c600', "Men's 600 kg", 2),
    team('t_bulls', 'Raging Bulls', 'c540', 12),
    team('t_anchors', 'Iron Anchors', 'c540', 205),
    team('t_runners', 'Rope Runners', 'c540', 160),
    team('t_dead', 'Deadlift Dynasty', 'c540', 265),
    team('t_hitters', 'Heavy Hitters', 'c600', 38),
    team('t_crew', 'Anchor Crew', 'c600', 330),
    team('t_chalk', 'Chalk and Grit', 'c600', 95),
    team('t_lane', 'Lane Four', 'c600', 50),
    match('m01', 'c540', 't_bulls', 't_anchors', ['a', 'a'], 'final', 'Lane 1', 1),
    match('m02', 'c540', 't_runners', 't_dead', ['b', 'a', 'b'], 'final', 'Lane 2', 2),
    match('m03', 'c540', 't_bulls', 't_runners', ['a', 'b', 'a'], 'final', 'Lane 1', 3),
    match('m04', 'c540', 't_anchors', 't_dead', ['a'], 'live', 'Lane 2', 4),
    match('m05', 'c540', 't_bulls', 't_dead', [], 'scheduled', 'Lane 1', 5),
    match('m06', 'c540', 't_anchors', 't_runners', [], 'scheduled', 'Lane 2', 6),
    match('m07', 'c600', 't_hitters', 't_crew', ['a', 'a'], 'final', 'Lane 3', 7),
    match('m08', 'c600', 't_chalk', 't_lane', ['b', 'b'], 'final', 'Lane 4', 8),
    match('m09', 'c600', 't_hitters', 't_chalk', ['b', 'a', 'b'], 'final', 'Lane 3', 9),
    match('m10', 'c600', 't_crew', 't_lane', [], 'scheduled', 'Lane 4', 10),
    match('m11', 'c600', 't_hitters', 't_lane', [], 'scheduled', 'Lane 3', 11),
    match('m12', 'c600', 't_crew', 't_chalk', [], 'scheduled', 'Lane 4', 12)
  ]
}
