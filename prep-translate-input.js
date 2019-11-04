/**
  *
  * main() will be invoked when you Run This Action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
    return {payload: params.text, translateTo: 'es', translateFrom: 'en', username: '79cb1cb1-639d-4292-8c88-cd1cd1df2035', password: 'qKvplSj2ShFK'};
}
