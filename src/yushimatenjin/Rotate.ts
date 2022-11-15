import { createScript, attrib } from "../utils/createScriptDecorator";
import { ScriptTypeBase } from "../types/ScriptTypeBase";

@createScript("Rotate")
class Rotate extends ScriptTypeBase {
  @attrib({ type: "vec3" })
  speed: pc.Vec3;

  update(dt: number) {
    this.entity.rotateLocal(this.speed);
  }
}

export default Rotate;