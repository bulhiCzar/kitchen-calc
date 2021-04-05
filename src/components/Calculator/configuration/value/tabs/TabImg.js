import cn from 'classnames'

const TabImg = ({isActive}) => {
    return (
        <div className={cn(
            "miscalculation-tabs__content",
            isActive && 'miscalculation-tabs__content--active'
        )}>
            <div className="miscalculation-tabs__inner">
                <h4 className="miscalculation-tabs__title">Дизайн-проект</h4>
            </div>
            <div className="upload-file">
                <input
                    type="file"
                    name="files[]"
                    id="upload-file__upload1"
                    className="upload-file__input"
                    accept=".jpg, .jpeg, .png"
                    onInput="onFileSelected(event)"
                    multiple
                />
                <label className="upload-file__label" htmlFor="upload-file__upload1">
                                        <span className="upload-file__icon">
                                            <img src="img/dist/sprite.svg#upload-miscalculation" alt=""/>
                                        </span>
                    <span className="upload-file__help">Загрузить фото</span>
                </label>
            </div>
            <div className="miscalculation-tabs__inner">
                <h4 className="miscalculation-tabs__title">Примеры наших работ:</h4>
            </div>
            <button className="miscalculation-tabs__trigger">
                <span className="miscalculation-tabs__trigger--title">Выбрать из галереи проектов</span>
                <span className="miscalculation-tabs__trigger--icon">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.0083 1.54997C9.0083 1.31976 8.82184 1.1333 8.59163 1.1333H1.04997C0.819759 1.1333 0.633301 1.31976 0.633301 1.54997V9.09163C0.633301 9.32184 0.819759 9.5083 1.04997 9.5083H8.59163C8.82184 9.5083 9.0083 9.32184 9.0083 9.09163V1.54997ZM8.17497 8.67497H1.46663V1.96663H8.17497V8.67497Z"
                                                fill="white"/>
                                            <path
                                                d="M19.3833 1.54997C19.3833 1.31976 19.1968 1.1333 18.9666 1.1333H11.425C11.1948 1.1333 11.0083 1.31976 11.0083 1.54997V9.09163C11.0083 9.32184 11.1948 9.5083 11.425 9.5083H18.9666C19.1968 9.5083 19.3833 9.32184 19.3833 9.09163V1.54997ZM18.55 8.67497H11.8416V1.96663H18.55V8.67497Z"
                                                fill="white"/>
                                            <path
                                                d="M9.0083 11.925C9.0083 11.6948 8.82184 11.5083 8.59163 11.5083H1.04997C0.819759 11.5083 0.633301 11.6948 0.633301 11.925V19.4666C0.633301 19.6968 0.819759 19.8833 1.04997 19.8833H8.59163C8.82184 19.8833 9.0083 19.6968 9.0083 19.4666V11.925ZM8.17497 19.0083H1.46663V12.3416H8.17497V19.0083Z"
                                                fill="white"/>
                                            <path
                                                d="M19.3833 11.925C19.3833 11.6948 19.1968 11.5083 18.9666 11.5083H11.425C11.1948 11.5083 11.0083 11.6948 11.0083 11.925V19.4666C11.0083 19.6968 11.1948 19.8833 11.425 19.8833H18.9666C19.1968 19.8833 19.3833 19.6968 19.3833 19.4666V11.925ZM18.55 19.0083H11.8416V12.3416H18.55V19.0083Z"
                                                fill="white"/>
                                        </svg>
                                    </span>
            </button>
        </div>
    )
}

export default TabImg