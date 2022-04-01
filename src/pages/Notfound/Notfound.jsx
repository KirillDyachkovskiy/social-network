import {Field} from "../../ui/Field";
import {compose} from "redux";
import {HOC} from "../../hoc";

export const NotfoundPure = () => (
  <Field>
    Страница не найдена!
  </Field>
);

export const Notfound = compose(HOC.withRedirect('/login'))(NotfoundPure);
