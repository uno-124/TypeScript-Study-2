import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* joinは配列を引数(この場合は" / ") で結合する*/}
      {/* オプショナルチェイニング　(?)：途中の要素がnullだった場合そこで処理を中断することができる。 */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
