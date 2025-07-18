import { ConfigPlugin } from "@expo/config-plugins";
import { BackgroundMode } from "./withBLEBackgroundModes";
export { BackgroundMode };
declare const _default: ConfigPlugin<void | {
    isBackgroundEnabled?: boolean;
    neverForLocation?: boolean;
    modes?: BackgroundMode[];
    bluetoothAlwaysPermission?: string | false;
    bluetoothPeripheralPermission?: string | false;
}>;
export default _default;
