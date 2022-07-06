import React, { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("fn");

  useEffect(() => {
    getTodos();
    getPosts();
  }, []);

  const getTodos = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((x) => x.json())
      .then((response) => {
        setTodos(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const getPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((x) => x.json())
      .then((response) => {
        setPosts(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const renderBodyTodo = (e) => {
    return (
      <React.Fragment>
        {todos.map((item, i) => {
          return (
            <tr key={i}>
              <th scope="row" className="col">
                {item.id}
              </th>
              <td>{item.title}</td>
              <td>{item.completed ? "Tamamlandı" : "Yapılacak"}</td>
              <td>
                <button className="btn btn-xs btn-danger">Sil</button>
                <button className="btn btn-xs btn-warning">Düzenle</button>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  };

  const renderTableTodo = () => {
    return (
      <>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Başlık</th>
              <th scope="col">Durum</th>
            </tr>
          </thead>
          <tbody>{renderBodyTodo()}</tbody>
        </table>
      </>
    );
  };
  // ##############################################################
  // ##############################################################
  // ##############################################################
  // ##############################################################

  const renderBodyPosts = (e) => {
    return (
      <React.Fragment>
        {posts.map((item, i) => {
          return (
            <tr key={i} className="container">
              <th scope="row" className="col-1">
                {item.id}
              </th>
              <td className="col-md-3">{item.title}</td>

              <td className="col-md">{item.body}</td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  };

  const renderTablePosts = () => {
    return (
      <>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th className="col-md-1" scope="col">
                #
              </th>
              <th className="col-md-3" scope="col">
                Başlık
              </th>
              <th className="col-md-8" scope="col">
                İçerik
              </th>
            </tr>
          </thead>
          <tbody>{renderBodyPosts()}</tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <div className="App container">
        <div className="container">
          <div
           className="btn-group tabs d-flex justify-content-center"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={() => setActiveTab("cls")}
              className={
                activeTab === "cls"
                  ? "col m-2 btn btn-warning"
                  : "col m-2 btn btn-default "
              }
            >
              Fn Post Component
            </button>
            <h1 className="mx-5"></h1>
            <button
              onClick={() => setActiveTab("fn")}
              className={
                activeTab === "fn"
                  ? "col m-2 btn btn-warning"
                  : "col m-2 btn btn-default"
              }
            >
              Fn Todo Component
            </button>
          </div>
          <br />
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>{activeTab === "cls" ? renderTablePosts()   : renderTableTodo() }</>
          )}
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;
