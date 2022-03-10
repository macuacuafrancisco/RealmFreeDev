export default class RepositorySchema {
    static schema = {
        name: 'Repository',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            fullName: 'string',
            descriprion: 'string',
            stars : 'int',
            forks: 'int'
        }
    }
}
  