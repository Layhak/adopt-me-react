// Other way to create component with props
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h1", {}, props.animal),
//     React.createElement("h1", {}, props.bread),
//   ]);
// };
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.bread}</h1>
    </div>
  );
};

export default Pet;
