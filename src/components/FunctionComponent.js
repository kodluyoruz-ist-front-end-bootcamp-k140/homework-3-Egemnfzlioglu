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

  // ### todo datasını çekiyoruz
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

  // ### post datasını çekiyoruz
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

  // ###### todoları tabloya yazdırıyoruz

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

  // ###### postları tabloya yazdırıyoruz

  const renderTableTodo = () => {
    return (
      <>
        <div className="todoAndPostDiv">
          <table id="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">Durum</th>
                <th scope="col">Aksiyonlar</th>
              </tr>
            </thead>
            <tbody>{renderBodyTodo()}</tbody>
          </table>
        </div>
      </>
    );
  };
  // ##############################################################
  // ##############################################################
  // ##############################################################
  // ##############################################################

  // ### postları yazdırıyoruz"

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
        <div className="todoAndPostDiv">
          <table id="table">
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
        </div>
      </>
    );
  };

  // ##############################################################

  // ### render işlemi yapıyoruz ve burada TODO ve POST arası geçişi sağlıyoruz

  return (
    <>
      <div className="buttons">
        <button
          onClick={() => setActiveTab("cls")}
          className={activeTab === "cls" ? " btn-warning" : "btn-warning "}
        >
          Fn Post Component
        </button>
        <button
          onClick={() => setActiveTab("fn")}
          className={activeTab === "fn" ? "btn-warning" : "btn-warning"}
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
        <>{activeTab === "cls" ? renderTablePosts() : renderTableTodo()}</>
      )}
    </>
  );
};

export default FunctionComponent;
