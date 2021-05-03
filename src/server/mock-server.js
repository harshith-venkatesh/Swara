import { createServer, Model, RestSerializer } from 'miragejs'
import { videosList } from '../constants/videosList'
export default function callMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },
    models: {
      user: Model
    },
    routes() {
      this.namespace = 'api'
      this.timing = 3000
      this.resource('videos')
    },
    seeds(server) {
      server.create('video', { ...videosList })
    }
  })
}
