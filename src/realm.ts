import Realm from 'realm';


export const WorkspaceSchema: Realm.ObjectSchema = {
  name: 'Workspace',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    todos: { type: 'linkingObjects', objectType: 'Todo', property: 'workspace' }
  }
}

export const TodoSchema: Realm.ObjectSchema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    doneAt: { type: 'date', optional: true },
    workspace: 'Workspace'
  }
};

export const DinoSchema: Realm.ObjectSchema = {
  name: 'Dino',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string'
  }
}

export const schemas = [WorkspaceSchema, TodoSchema, DinoSchema];

export default new Realm({ schema: schemas, deleteRealmIfMigrationNeeded: true });


