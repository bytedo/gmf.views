/**
 * 模板引擎拓展包
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/09/27 14:17:46
 */

import Smarty from 'smartyx'

export default {
  name: 'views',
  install() {
    var eng = new Smarty()
    var conf = this.get('views')

    if (conf.enabled) {
      if (conf.dir) {
        eng.config('path', conf.dir)

        if (conf.ext) {
          eng.config('ext', conf.ext)
        }
        return eng
      } else {
        throw new Error('views.dir is empty')
      }
    }
    return Object.create(null)
  }
}
