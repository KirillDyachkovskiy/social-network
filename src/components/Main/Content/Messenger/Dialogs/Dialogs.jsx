import classNames from "./Dialogs.module.scss";

const Dialogs = () => {
    return (
        <aside>
            <div className={classNames.dialogs}>
                тут будет список диалогов
            </div>
        </aside>
    );
}

export { Dialogs };