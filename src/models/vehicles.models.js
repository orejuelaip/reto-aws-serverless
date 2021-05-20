module.exports =  (sequelize, Sequelize, DataTypes) => {
	const Vehicles = sequelize.define("vehicles", {
    id: {   type: DataTypes.UUID,
      			defaultValue: Sequelize.UUIDV4,
      			primaryKey: true
        },
    detalle: {
            type: DataTypes.TEXT,
            allowNull: false
      },
	},{
		freezeTableName: true
	});

	return Vehicles;
};
