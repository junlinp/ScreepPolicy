var SpawnGenerator = {
    
    /** @param {Creep} creep **/
    run: function () {
        var root_energy_available = 0;
        for (room_name in Game.rooms) {
            root_energy_available += Game.rooms[room_name].energyAvailable;
        }
        var harvesters_list = _.filter(Game.creeps, (creep) => creep.memory.role == "harvester");
        console.log(root_energy_available);
        if(harvesters_list.length < 3) {
            var newName = "Harvester" + Game.time;
            //if (harvesters_list.length == 3 && root_energy_available >= 300) {
            //    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, { memory: { role: "harvester", energy_cost:300 } }); 
            //} else {
                Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: "harvester" , energy_cost : 200} }); 
            //}
        }
        var upgrader_list = _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader");
        if (upgrader_list.length < 5) {
            var newName = "Upgrader" + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: "upgrader",energy_cost : 200 } }); 
        }
        var builder_list = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
        if (builder_list.length < 2) {
            var newName = "Builder" + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, { memory: { role: "builder" , energy_cost: 200} }); 
        }
    }
};

module.exports = SpawnGenerator;