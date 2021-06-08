const { equal, deepEqual } = require('assert')

const data = require('..')

equal(data.api_mst_ship.find(e => e.api_name === '睦月').api_id, 1)
equal(data.api.api_mst_ship.find(e => e.api_name === '睦月').api_id, 1)

equal(data.api.getShip({ name: '睦月' }).api_id, 1)
equal(data.api.getShip({ id: 1501 }).api_name, '駆逐イ級')
equal(data.api.getShipType({ name: '海防艦' }).api_id, 1)
equal(data.api.getEquipment({ name: '12cm単装砲' }).api_id, 1)
equal(data.api.getEquipmentType({ name: '小口径主砲' }).api_id, 1)
equal(data.api.getItem({ name: '高速修復材' }).api_id, 1)

equal(data.map.edges[445][1][1], 'A')
equal(data.map.diffs[1], 'Casual')
equal(data.map.formations[1], 'Line Ahead')
equal(data.map.regularMaps[0], 11)
equal(data.map.battleRanks[0], 'S')
equal(data.map.getNodeType(5, 5, 5), 'Boss')
equal(data.map.getDiff(1), 'Casual')
equal(data.map.getDiffId('Casual'), 1)
equal(data.map.getFormation(1), 'Line Ahead')
equal(data.map.getFormationId('Line Ahead'), 1)
equal(data.map.getNodeLabel(445, 1), 'A')
equal(data.map.getNodeLabels(445)[0], 'A')

equal(data.tl('睦月'), 'Mutsuki')
equal(data.tl.ship['睦月'], 'Mutsuki')
equal(data.tl.tlShip('睦月'), 'Mutsuki')
equal(data.tl.tlShipFromId(1), 'Mutsuki')
equal(data.tlShip('睦月'), 'Mutsuki')
equal(data.tlShipFromId(1), 'Mutsuki')

equal(data.tl('12cm単装砲'), '12cm Single Gun Mount')
equal(data.tl.equipment['12cm単装砲'], '12cm Single Gun Mount')
equal(data.tl.tlEquipment('12cm単装砲'), '12cm Single Gun Mount')
equal(data.tl.tlEquipmentFromId(1), '12cm Single Gun Mount')
equal(data.tlEquipment('12cm単装砲'), '12cm Single Gun Mount')
equal(data.tlEquipmentFromId(1), '12cm Single Gun Mount')

equal(data.tl('駆逐イ級'), 'Destroyer I-Class')
equal(data.tl.enemy['駆逐イ級'], 'Destroyer I-Class')
equal(data.tl.tlEnemy('駆逐イ級'), 'Destroyer I-Class')
equal(data.tl.tlEnemyFromId(1501), 'Destroyer I-Class')
equal(data.tlEnemy('駆逐イ級'), 'Destroyer I-Class')
equal(data.tlEnemyFromId(1501), 'Destroyer I-Class')

equal(data.tl('北方棲妹-壊_1870'), 'Northern Little Sister Damaged III')
equal(data.tl.enemy['北方棲妹-壊_1870'], 'Northern Little Sister Damaged III')
equal(data.tl.tlEnemy('北方棲妹-壊_1870'), 'Northern Little Sister Damaged III')
equal(data.tl.tlEnemyFromId(1870), 'Northern Little Sister Damaged III')
equal(data.tlEnemy('北方棲妹-壊_1870'), 'Northern Little Sister Damaged III')
equal(data.tlEnemyFromId(1870), 'Northern Little Sister Damaged III')

equal(data.tl('北方棲妹-壊'), 'Northern Little Sister Damaged')
equal(data.tl.enemy['北方棲妹-壊'], 'Northern Little Sister Damaged')
equal(data.tl.tlEnemy('北方棲妹-壊'), 'Northern Little Sister Damaged')
equal(data.tl.tlEnemyFromId(1868), 'Northern Little Sister Damaged')
equal(data.tlEnemy('北方棲妹-壊'), 'Northern Little Sister Damaged')
equal(data.tlEnemyFromId(1868), 'Northern Little Sister Damaged')

equal(data.tl('5inch単装砲'), '5inch Single Gun Mount')
equal(data.tl.enemyEquipment['5inch単装砲'], '5inch Single Gun Mount')
equal(data.tl.tlEnemyEquipment('5inch単装砲'), '5inch Single Gun Mount')
equal(data.tl.tlEnemyEquipmentFromId(501), '5inch Single Gun Mount')
equal(data.tlEnemyEquipment('5inch単装砲'), '5inch Single Gun Mount')
equal(data.tlEnemyEquipmentFromId(501), '5inch Single Gun Mount')

equal(data.tlEnemyEquipment('5inch単装高射砲'), '5inch Single Anti-Aircraft Gun Mount (?)')
equal(data.tlEnemyEquipmentFromId(504), '5inch Single Anti-Aircraft Gun Mount')
equal(data.tlEnemyEquipmentFromId(510), '5inch Single Anti-Aircraft Gun Mount (Secondary)')

equal(data.tl('海防艦'), 'Coastal Defense Ship')
equal(data.tl.shipType['海防艦'], 'Coastal Defense Ship')
equal(data.tl.tlShipType('海防艦'), 'Coastal Defense Ship')
equal(data.tl.tlShipTypeFromId(1), 'Coastal Defense Ship')
equal(data.tlShipType('海防艦'), 'Coastal Defense Ship')
equal(data.tlShipTypeFromId(1), 'Coastal Defense Ship')

equal(data.tl('小口径主砲'), 'Small Caliber Main Gun')
equal(data.tl.equipmentType['小口径主砲'], 'Small Caliber Main Gun')
equal(data.tl.tlEquipmentType('小口径主砲'), 'Small Caliber Main Gun')
equal(data.tl.tlEquipmentTypeFromId(1), 'Small Caliber Main Gun')
equal(data.tlEquipmentType('小口径主砲'), 'Small Caliber Main Gun')
equal(data.tlEquipmentTypeFromId(1), 'Small Caliber Main Gun')

equal(data.tl('高速修復材'), 'Instant Repair Material')
equal(data.tl.item['高速修復材'], 'Instant Repair Material')
equal(data.tl.tlItem('高速修復材'), 'Instant Repair Material')
equal(data.tl.tlItemFromId(1), 'Instant Repair Material')
equal(data.tlItem('高速修復材'), 'Instant Repair Material')
equal(data.tlItemFromId(1), 'Instant Repair Material')

equal(data.wiki.ship['Mutsuki Kai Ni']._japanese_name, '睦月改二')
equal(data.wiki.ship['Mutsuki Kai Ni']._full_name, 'Mutsuki Kai Ni')
deepEqual(data.wiki.ship['Mutsuki Kai Ni']._implementation_date, [2015, 4, 23])
equal(data.wiki.ship['Mutsuki Kai Ni']._voice_actor, 'Hidaka Rina')

equal(data.wiki.quest.A1.title, 'はじめての「編成」！')
