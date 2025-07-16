/**
 * Uma Musume Career Planner - Constants Module
 * Contains all application constants including character data, thresholds, and configuration
 */

// Define the constants module
(function() {
    'use strict';
    
    // Basic application constants
    const STYLES = ['front-runner', 'pace-chaser', 'late-surger', 'end-closer'];
    const TRACK_TYPES = ['sprint', 'mile', 'medium', 'long'];
    const RARITIES = [1, 2, 3];
    const APTITUDE_GRADES = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

    // Complete character database with accurate data from Uma Musume Global
    const CHARACTERS = [
      // 🆕 NEWEST CHARACTERS (July 2025)
      {
        id: 'biwa_hayahide',
        name: 'Biwa Hayahide',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        aptitudes: { turf: 'A', dirt: 'F', sprint: 'F', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'E', pace: 'A', late: 'B', end: 'E' },
        statGrowth: { speed: 0, stamina: 0, power: 0, guts: 10, wisdom: 20 },
        baseStats: { speed: 85, stamina: 93, power: 82, guts: 93, wisdom: 97 },
        fanGoalThresholds: [8000],
        image: '🏇',
        uniqueSkill: '∴win Q.E.D.'
      },
      {
        id: 'mihono_bourbon',
        name: 'Mihono Bourbon',
        rarity: 3,
        defaultStyle: 'front-runner',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'C', mile: 'B', medium: 'A', long: 'B' },
        runningStyles: { front: 'A', pace: 'B', late: 'E', end: 'G' },
        statGrowth: { speed: 0, stamina: 20, power: 10, guts: 0, wisdom: 0 },
        baseStats: { speed: 82, stamina: 92, power: 88, guts: 85, wisdom: 89 },
        fanGoalThresholds: [5000],
        image: '🤖',
        uniqueSkill: 'G00 1st. F∞'
      },

      // 3★ Rarity Characters (June 26th Global Launch)
      {
        id: 'special_week',
        name: 'Special Week',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'F', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'G', pace: 'A', late: 'A', end: 'C' },
        statGrowth: { speed: 0, stamina: 20, power: 0, guts: 0, wisdom: 10 },
        baseStats: { speed: 83, stamina: 88, power: 98, guts: 90, wisdom: 91 },
        fanGoalThresholds: [5000],
        image: '🌟',
        uniqueSkill: 'Shooting Star'
      },
      {
        id: 'silence_suzuka',
        name: 'Silence Suzuka',
        rarity: 3,
        defaultStyle: 'front-runner',
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'D', mile: 'A', medium: 'A', long: 'E' },
        runningStyles: { front: 'A', pace: 'C', late: 'E', end: 'G' },
        statGrowth: { speed: 20, stamina: 0, power: 0, guts: 10, wisdom: 0 },
        baseStats: { speed: 101, stamina: 84, power: 77, guts: 100, wisdom: 88 },
        fanGoalThresholds: [5000],
        image: '🌸',
        uniqueSkill: "I'm Not Giving Up the Lead...!"
      },
      {
        id: 'tokai_teio',
        name: 'Tokai Teio',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'F', mile: 'E', medium: 'A', long: 'B' },
        runningStyles: { front: 'C', pace: 'A', late: 'B', end: 'E' },
        statGrowth: { speed: 20, stamina: 10, power: 0, guts: 0, wisdom: 0 },
        baseStats: { speed: 90, stamina: 89, power: 83, guts: 92, wisdom: 96 },
        fanGoalThresholds: [5000],
        image: '👑',
        uniqueSkill: 'Sky-High Teio Step'
      },
      {
        id: 'maruzensky',
        name: 'Maruzensky',
        rarity: 3,
        defaultStyle: 'front-runner',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'D', sprint: 'B', mile: 'A', medium: 'B', long: 'C' },
        runningStyles: { front: 'A', pace: 'B', late: 'D', end: 'E' },
        statGrowth: { speed: 10, stamina: 0, power: 0, guts: 0, wisdom: 20 },
        baseStats: { speed: 88, stamina: 84, power: 86, guts: 95, wisdom: 92 },
        fanGoalThresholds: [3000],
        image: '🌺',
        uniqueSkill: 'Red Shift/LP1211-M'
      },
      {
        id: 'oguri_cap',
        name: 'Oguri Cap',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'B', sprint: 'E', mile: 'A', medium: 'A', long: 'B' },
        runningStyles: { front: 'C', pace: 'A', late: 'A', end: 'B' },
        statGrowth: { speed: 20, stamina: 0, power: 10, guts: 0, wisdom: 0 },
        baseStats: { speed: 101, stamina: 66, power: 106, guts: 84, wisdom: 93 },
        fanGoalThresholds: [10000],
        image: '🏆',
        uniqueSkill: 'Triumphant Pulse'
      },
      {
        id: 'rice_shower',
        name: 'Rice Shower',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'E', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'E', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 0, stamina: 10, power: 0, guts: 20, wisdom: 0 },
        baseStats: { speed: 71, stamina: 117, power: 70, guts: 102, wisdom: 90 },
        fanGoalThresholds: [5000, 15000],
        image: '🌧️',
        uniqueSkill: 'Blue Rose Closer'
      },
      {
        id: 'taiki_shuttle',
        name: 'Taiki Shuttle',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'B', sprint: 'A', mile: 'A', medium: 'E', long: 'G' },
        runningStyles: { front: 'B', pace: 'A', late: 'C', end: 'E' },
        statGrowth: { speed: 20, stamina: 0, power: 0, guts: 0, wisdom: 10 },
        baseStats: { speed: 96, stamina: 71, power: 98, guts: 93, wisdom: 92 },
        fanGoalThresholds: [10000],
        image: '✈️',
        uniqueSkill: 'Shooting for Victory!'
      },
      {
        id: 'mejiro_mcqueen',
        name: 'Mejiro McQueen',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        aptitudes: { turf: 'A', dirt: 'E', sprint: 'G', mile: 'F', medium: 'A', long: 'A' },
        runningStyles: { front: 'B', pace: 'A', late: 'C', end: 'E' },
        statGrowth: { speed: 0, stamina: 20, power: 0, guts: 0, wisdom: 10 },
        baseStats: { speed: 78, stamina: 108, power: 85, guts: 88, wisdom: 91 },
        fanGoalThresholds: [15000],
        image: '👸',
        uniqueSkill: 'The Duty of Dignity Calls'
      },
      {
        id: 'symboli_rudolf',
        name: 'Symboli Rudolf',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'E', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'C', pace: 'A', late: 'A', end: 'B' },
        statGrowth: { speed: 0, stamina: 20, power: 0, guts: 10, wisdom: 0 },
        baseStats: { speed: 86, stamina: 91, power: 83, guts: 96, wisdom: 94 },
        fanGoalThresholds: [20000],
        image: '⚜️',
        uniqueSkill: "Behold Thine Emperor's Divine Might"
      },
      {
        id: 'marvelous_sunday',
        name: 'Marvelous Sunday',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'F', sprint: 'G', mile: 'C', medium: 'A', long: 'B' },
        runningStyles: { front: 'D', pace: 'A', late: 'A', end: 'C' },
        statGrowth: { speed: 0, stamina: 0, power: 15, guts: 0, wisdom: 15 },
        baseStats: { speed: 84, stamina: 87, power: 89, guts: 85, wisdom: 90 },
        fanGoalThresholds: [10000, 15000],
        image: '☀️',
        uniqueSkill: 'GALmem. forever♪'
      },
      {
        id: 'yukino_bijin',
        name: 'Yukino Bijin',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'B', sprint: 'D', mile: 'A', medium: 'A', long: 'E' },
        runningStyles: { front: 'D', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 10, stamina: 0, power: 0, guts: 20, wisdom: 0 },
        baseStats: { speed: 89, stamina: 79, power: 87, guts: 91, wisdom: 84 },
        fanGoalThresholds: [3000, 10000],
        image: '❄️',
        uniqueSkill: "I'm Possible"
      },
      {
        id: 'eishin_flash',
        name: 'Eishin Flash',
        rarity: 3,
        defaultStyle: 'late-surger',
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'F', medium: 'A', long: 'A' },
        runningStyles: { front: 'E', pace: 'C', late: 'A', end: 'B' },
        statGrowth: { speed: 0, stamina: 0, power: 10, guts: 0, wisdom: 20 },
        baseStats: { speed: 100, stamina: 83, power: 93, guts: 82, wisdom: 92 },
        fanGoalThresholds: [10000],
        image: '⚡',
        uniqueSkill: 'Schwarzes Schwert'
      },
      {
        id: 'tm_opera_o',
        name: 'T.M. Opera O',
        rarity: 3,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'F', medium: 'A', long: 'A' },
        runningStyles: { front: 'E', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 0, stamina: 20, power: 0, guts: 0, wisdom: 10 },
        baseStats: { speed: 75, stamina: 108, power: 75, guts: 102, wisdom: 90 },
        fanGoalThresholds: [15000],
        image: '🎭',
        uniqueSkill: 'Operatic Finale'
      },

      // 2★ Rarity Characters (June 26th Global Launch)
      {
        id: 'gold_ship',
        name: 'Gold Ship',
        rarity: 2,
        defaultStyle: 'end-closer',
        styles: ['late-surger', 'end-closer'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'G', pace: 'E', late: 'B', end: 'A' },
        statGrowth: { speed: 0, stamina: 20, power: 10, guts: 0, wisdom: 0 },
        baseStats: { speed: 82, stamina: 96, power: 100, guts: 77, wisdom: 70 },
        fanGoalThresholds: [3000, 6000, 10000],
        image: '🚢',
        uniqueSkill: 'Warning Shot!'
      },
      {
        id: 'vodka',
        name: 'Vodka',
        rarity: 2,
        defaultStyle: 'late-surger',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'F', mile: 'A', medium: 'A', long: 'F' },
        runningStyles: { front: 'E', pace: 'C', late: 'A', end: 'B' },
        statGrowth: { speed: 10, stamina: 0, power: 20, guts: 0, wisdom: 0 },
        baseStats: { speed: 96, stamina: 61, power: 105, guts: 75, wisdom: 88 },
        fanGoalThresholds: [2000, 5000, 8000],
        image: '🍸',
        uniqueSkill: 'Xceleration'
      },
      {
        id: 'daiwa_scarlet',
        name: 'Daiwa Scarlet',
        rarity: 2,
        defaultStyle: 'front-runner',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'F', mile: 'A', medium: 'A', long: 'B' },
        runningStyles: { front: 'A', pace: 'A', late: 'D', end: 'E' },
        statGrowth: { speed: 10, stamina: 0, power: 0, guts: 20, wisdom: 0 },
        baseStats: { speed: 84, stamina: 77, power: 79, guts: 95, wisdom: 90 },
        fanGoalThresholds: [3000, 8000, 10000],
        image: '🌹',
        uniqueSkill: 'Red Ace'
      },
      {
        id: 'mayano_top_gun',
        name: 'Mayano Top Gun',
        rarity: 2,
        defaultStyle: 'pace-chaser',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'E', sprint: 'E', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'C', pace: 'A', late: 'B', end: 'D' },
        statGrowth: { speed: 0, stamina: 20, power: 0, guts: 10, wisdom: 0 },
        baseStats: { speed: 73, stamina: 100, power: 67, guts: 95, wisdom: 90 },
        fanGoalThresholds: [10000],
        image: '✈️',
        uniqueSkill: '1st Place Kiss☆'
      },
      {
        id: 'super_creek',
        name: 'Super Creek',
        rarity: 2,
        defaultStyle: 'pace-chaser',
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'G', medium: 'A', long: 'A' },
        runningStyles: { front: 'C', pace: 'A', late: 'B', end: 'E' },
        statGrowth: { speed: 0, stamina: 10, power: 0, guts: 0, wisdom: 20 },
        baseStats: { speed: 76, stamina: 106, power: 75, guts: 98, wisdom: 97 },
        fanGoalThresholds: [5000, 9000],
        image: '🏞️',
        uniqueSkill: 'Clear Heart'
      },
      {
        id: 'grass_wonder',
        name: 'Grass Wonder',
        rarity: 2,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'A', medium: 'B', long: 'A' },
        runningStyles: { front: 'D', pace: 'A', late: 'A', end: 'C' },
        statGrowth: { speed: 20, stamina: 0, power: 10, guts: 0, wisdom: 0 },
        baseStats: { speed: 91, stamina: 83, power: 97, guts: 79, wisdom: 100 },
        fanGoalThresholds: [1500, 4000, 8000],
        image: '🌱',
        uniqueSkill: 'Focused Mind'
      },
      {
        id: 'el_condor_pasa',
        name: 'El Condor Pasa',
        rarity: 2,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'B', sprint: 'F', mile: 'A', medium: 'A', long: 'B' },
        runningStyles: { front: 'B', pace: 'A', late: 'B', end: 'D' },
        statGrowth: { speed: 20, stamina: 0, power: 0, guts: 0, wisdom: 10 },
        baseStats: { speed: 100, stamina: 75, power: 91, guts: 97, wisdom: 87 },
        fanGoalThresholds: [3000, 10000],
        image: '🦅',
        uniqueSkill: 'Corazón ☆ Ardiente'
      },
      {
        id: 'air_groove',
        name: 'Air Groove',
        rarity: 2,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'E', sprint: 'E', mile: 'B', medium: 'A', long: 'A' },
        runningStyles: { front: 'C', pace: 'A', late: 'B', end: 'D' },
        statGrowth: { speed: 10, stamina: 0, power: 10, guts: 10, wisdom: 0 },
        baseStats: { speed: 94, stamina: 82, power: 91, guts: 88, wisdom: 95 },
        fanGoalThresholds: [8000, 10000],
        image: '💨',
        uniqueSkill: "Empress's Pride"
      },

      // 1★ Rarity Characters (June 26th Global Launch)
      {
        id: 'mejiro_ryan',
        name: 'Mejiro Ryan',
        rarity: 1,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'D', sprint: 'D', mile: 'C', medium: 'A', long: 'A' },
        runningStyles: { front: 'D', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 0, stamina: 0, power: 20, guts: 0, wisdom: 10 },
        baseStats: { speed: 82, stamina: 85, power: 89, guts: 78, wisdom: 86 },
        fanGoalThresholds: [5000, 9000],
        image: '🦁',
        uniqueSkill: 'Feel the Burn!'
      },
      {
        id: 'agnes_tachyon',
        name: 'Agnes Tachyon',
        rarity: 1,
        defaultStyle: 'pace-chaser',
        styles: ['pace-chaser', 'late-surger'],
        aptitudes: { turf: 'A', dirt: 'D', sprint: 'E', mile: 'B', medium: 'A', long: 'B' },
        runningStyles: { front: 'D', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 20, stamina: 0, power: 0, guts: 10, wisdom: 0 },
        baseStats: { speed: 82, stamina: 76, power: 76, guts: 79, wisdom: 87 },
        fanGoalThresholds: [4000, 8000],
        image: '🔬',
        uniqueSkill: 'Introduction to Physiology'
      },
      {
        id: 'winning_ticket',
        name: 'Winning Ticket',
        rarity: 1,
        defaultStyle: 'late-surger',
        styles: ['late-surger', 'end-closer'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'G', mile: 'F', medium: 'A', long: 'B' },
        runningStyles: { front: 'G', pace: 'D', late: 'A', end: 'B' },
        statGrowth: { speed: 0, stamina: 10, power: 20, guts: 0, wisdom: 0 },
        baseStats: { speed: 87, stamina: 68, power: 91, guts: 74, wisdom: 80 },
        fanGoalThresholds: [3000, 8000],
        image: '🎫',
        uniqueSkill: 'V Is for Victory!'
      },
      {
        id: 'sakura_bakushin_o',
        name: 'Sakura Bakushin O',
        rarity: 1,
        defaultStyle: 'front-runner',
        styles: ['front-runner', 'pace-chaser'],
        aptitudes: { turf: 'A', dirt: 'G', sprint: 'A', mile: 'E', medium: 'G', long: 'G' },
        runningStyles: { front: 'A', pace: 'C', late: 'G', end: 'G' },
        statGrowth: { speed: 20, stamina: 0, power: 0, guts: 10, wisdom: 0 },
        baseStats: { speed: 87, stamina: 54, power: 93, guts: 85, wisdom: 81 },
        fanGoalThresholds: [1000, 3000, 5000],
        image: '🌸',
        uniqueSkill: 'Class Rep + Speed = Bakushin'
      },
      {
        id: 'haru_urara',
        name: 'Haru Urara',
        rarity: 1,
        defaultStyle: 'late-surger',
        aptitudes: { turf: 'E', dirt: 'A', sprint: 'B', mile: 'C', medium: 'F', long: 'G' },
        runningStyles: { front: 'G', pace: 'E', late: 'B', end: 'A' },
        statGrowth: { speed: 0, stamina: 0, power: 10, guts: 20, wisdom: 0 },
        baseStats: { speed: 83, stamina: 58, power: 89, guts: 86, wisdom: 84 },
        fanGoalThresholds: [5000, 9000],
        image: '🌻',
        uniqueSkill: 'Super-Duper Stoked'
      },
      {
        id: 'matikanefukukitaru',
        name: 'Matikanefukukitaru',
        rarity: 1,
        defaultStyle: 'late-surger',
        aptitudes: { turf: 'A', dirt: 'E', sprint: 'C', mile: 'B', medium: 'A', long: 'A' },
        runningStyles: { front: 'D', pace: 'A', late: 'B', end: 'C' },
        statGrowth: { speed: 0, stamina: 20, power: 10, guts: 0, wisdom: 0 },
        baseStats: { speed: 77, stamina: 81, power: 88, guts: 81, wisdom: 73 },
        fanGoalThresholds: [4000, 8000],
        image: '🍀',
        uniqueSkill: 'Luck Be with Me!'
      },
      {
        id: 'nice_nature',
        name: 'Nice Nature',
        rarity: 1,
        defaultStyle: 'late-surger',
        styles: ['late-surger', 'end-closer'],
        aptitudes: { turf: 'A', dirt: 'D', sprint: 'D', mile: 'B', medium: 'A', long: 'B' },
        runningStyles: { front: 'G', pace: 'C', late: 'A', end: 'B' },
        statGrowth: { speed: 0, stamina: 0, power: 20, guts: 0, wisdom: 10 },
        baseStats: { speed: 86, stamina: 72, power: 89, guts: 69, wisdom: 84 },
        fanGoalThresholds: [3000, 7000],
        image: '🥉',
        uniqueSkill: 'I Can Win Sometimes, Right?'
      },
      {
        id: 'king_halo',
        name: 'King Halo',
        rarity: 1,
        defaultStyle: 'late-surger',
        aptitudes: { turf: 'A', dirt: 'F', sprint: 'B', mile: 'A', medium: 'B', long: 'D' },
        runningStyles: { front: 'C', pace: 'A', late: 'B', end: 'D' },
        statGrowth: { speed: 0, stamina: 0, power: 20, guts: 10, wisdom: 0 },
        baseStats: { speed: 87, stamina: 60, power: 93, guts: 73, wisdom: 87 },
        fanGoalThresholds: [3000, 6000],
        image: '👸',
        uniqueSkill: 'Call Me King'
      }
    ];

    // Updated stat thresholds with accurate data from comprehensive guide
    const STAT_THRESHOLDS = {
      sprint: {
        'front-runner': { speed: 750, stamina: 300, power: 350, guts: 300, wisdom: 300 },
        'pace-chaser': { speed: 650, stamina: 350, power: 500, guts: 300, wisdom: 300 },
        'late-surger': { speed: 550, stamina: 400, power: 600, guts: 300, wisdom: 300 },
        'end-closer': { speed: 550, stamina: 450, power: 600, guts: 300, wisdom: 300 }
      },
      mile: {
        'front-runner': { speed: 750, stamina: 400, power: 350, guts: 300, wisdom: 300 },
        'pace-chaser': { speed: 650, stamina: 450, power: 500, guts: 300, wisdom: 300 },
        'late-surger': { speed: 550, stamina: 500, power: 600, guts: 300, wisdom: 300 },
        'end-closer': { speed: 550, stamina: 550, power: 600, guts: 300, wisdom: 300 }
      },
      medium: {
        'front-runner': { speed: 750, stamina: 450, power: 350, guts: 300, wisdom: 300 },
        'pace-chaser': { speed: 650, stamina: 500, power: 500, guts: 300, wisdom: 300 },
        'late-surger': { speed: 550, stamina: 550, power: 600, guts: 300, wisdom: 300 },
        'end-closer': { speed: 550, stamina: 600, power: 600, guts: 300, wisdom: 300 }
      },
      long: {
        'front-runner': { speed: 750, stamina: 500, power: 350, guts: 300, wisdom: 300 },
        'pace-chaser': { speed: 650, stamina: 550, power: 500, guts: 300, wisdom: 300 },
        'late-surger': { speed: 550, stamina: 600, power: 600, guts: 300, wisdom: 300 },
        'end-closer': { speed: 550, stamina: 650, power: 600, guts: 300, wisdom: 300 }
      }
    };

    // Stat efficiency thresholds and diminishing returns
    const STAT_EFFICIENCY = {
      optimal: { speed: 1200, guts: 400, wisdom: 400 },
      diminishingReturns: { speed: 1200, guts: 400, wisdom: 400 },
      warnings: {
        speedSoftCap: "Speed gains are halved after 1200. Consider focusing on other stats.",
        gutsOverInvest: "Guts above 400 gives minimal returns. Focus on core stats instead.",
        wisdomOverInvest: "Wisdom above 400 gives minimal returns. Skill activation is already consistent.",
        staminaOverflow: "This stamina level may be excessive for this distance. Check if it's needed."
      }
    };

    // Skill recommendations by running style
    const SKILL_RECOMMENDATIONS = {
      'front-runner': {
        mustHave: ['Concentration', 'Sorry, Gotta Go!', 'Great Escape'],
        recommended: ['Corner Adept', 'Straight Adept', 'Right-Handed◎'],
        avoid: ['Overtaking skills', 'From-behind skills']
      },
      'pace-chaser': {
        mustHave: ['Speed Star', 'Positioning', 'Hydrate'],
        recommended: ['Corner Accel', 'Mid-race recovery', 'Might & Vision'],
        avoid: ['Early-phase speed boosts']
      },
      'late-surger': {
        mustHave: ['Furious Feat', 'Position Pilfer', 'Fast & Furious'],
        recommended: ['Corner bonuses', 'Straight bonuses', 'Overtake skills'],
        avoid: ['Front-runner only skills']
      },
      'end-closer': {
        mustHave: ['Encroaching Shadow', 'Corner Accel', 'Last-leg speed'],
        recommended: ['Multiple acceleration skills', 'Stamina recovery', 'Guts skills'],
        avoid: ['Early position skills']
      }
    };

    // Register the constants module
    if (window.Uma) {
        window.Uma.Constants = {
            STYLES,
            TRACK_TYPES,
            RARITIES,
            APTITUDE_GRADES,
            CHARACTERS,
            STAT_THRESHOLDS,
            STAT_EFFICIENCY,
            SKILL_RECOMMENDATIONS
        };
    } else {
        window.Uma = {
            Constants: {
                STYLES,
                TRACK_TYPES,
                RARITIES,
                APTITUDE_GRADES,
                CHARACTERS,
                STAT_THRESHOLDS,
                STAT_EFFICIENCY,
                SKILL_RECOMMENDATIONS
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('constants');
    }

    console.log('Constants module loaded successfully with corrected character data');
})();