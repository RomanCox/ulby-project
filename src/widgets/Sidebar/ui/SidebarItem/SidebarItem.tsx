import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { getUserAuthData } from 'entities/User';

import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemPropsType {
    collapsed: boolean;
    item: SidebarItemType;
}

export const SidebarItem = memo(({ collapsed, item }: SidebarItemPropsType) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            {!collapsed && (
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            )}
        </AppLink>
    );
});
