/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line func-names */
/* eslint-disable-next-line no-unused-vars */
import db from './db';

const dataProvider = {
  getList: (_resource, _params) =>
    db
      .allDocs({
        include_docs: true,
        attachments: true,
      })
      .then(data => ({ data: data.rows, total: data.total_rows })),

  getOne: (_resource, params) =>
    db
      .get(params.id)
      .then(function(doc) {
        return { data: doc };
      })
      // eslint-disable-next-line func-names
      .catch(function(err) {
        return err;
      }),

  getMany: (_resource, _params) => {},

  getManyReference: (_resource, _params) => {},

  update: (_resource, params) =>
    db
      .put({
        ...params.data.doc,
        id: params._id,
      })
      .then(function(response) {
        return { data: response };
      })
      .catch(function(err) {
        return err;
      }),

  updateMany: (_resource, _params) => {},

  create: (_resource, params) =>
    db
      .post(params.data)
      .then(function(response) {
        const doc = { ...params.data, id: response.id };
        return { data: doc };
      })
      .catch(function(err) {
        return err;
      }),

  delete: (_resource, _params) => {},
  deleteMany: (_resource, _params) => {},
};

export default dataProvider;
