import classNames from "./Content.module.scss";

const Content = () => {
    return (
        <aside>
            <div className={classNames.dialogs}>
                тут будет список диалогов
            </div>
        </aside>
    );
}

export { Content };