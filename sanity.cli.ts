import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from './vars'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
})
