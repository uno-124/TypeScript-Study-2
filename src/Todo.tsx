import { VFC } from "react";
import { TodoType } from "./types/todo";

// Pickを使用することで必要な要素を指定して型を利用できる
// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
// ) => {

// Omitを使用することで不要な要素を除いて型を利用できる
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // 必須ではないpropsを受け取る場合は初期値を入れる(completed参照)
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
