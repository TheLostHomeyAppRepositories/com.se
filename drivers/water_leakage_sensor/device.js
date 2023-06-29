"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zigbeedriver_1 = require("homey-zigbeedriver");
const iasZoneDevice_1 = __importDefault(require("@drenso/homey-zigbee-library/lib/iasZoneDevice"));
const powerConfigurationDevice_1 = __importDefault(require("@drenso/homey-zigbee-library/capabilities/powerConfigurationDevice"));
class ElkoWaterSensor extends homey_zigbeedriver_1.ZigBeeDevice {
    async onNodeInit(payload) {
        await super.onNodeInit(payload);
        await (0, iasZoneDevice_1.default)(this, payload.zclNode, ["alarm_water"], ["alarm1"]);
        await this.setCapabilityValue("alarm_water", false);
        await (0, powerConfigurationDevice_1.default)(this, payload.zclNode);
    }
}
module.exports = ElkoWaterSensor;
//# sourceMappingURL=device.js.map