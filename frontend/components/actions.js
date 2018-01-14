const testAction = (payload) => {
  return {
    type: "RECEIVE_HELLO",
    hellos: payload
  };
};

export default testAction;
