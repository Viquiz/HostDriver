const Serial_port = require("serialport")



async function device_list()
{
	return await Serial_port.list();
}


module.exports = {device_list:device_list}