import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowRight } from "@mui/icons-material";
import { styles } from "./drawer.styles";


interface PROFILELINKS {
  id?: number;
  title?: string;
  subTitle?: string;
  icon?: React.ReactNode;
  link?: string | undefined;
}
interface ProfileDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
  user?: object | null | undefined | any;
}

const profileLinksList = [
  {
    id: 1,
    title: "Log In as",
    subTitle: "See what others see",
    // icon: <LoginIcon />,
  },
  {
    id: 2,
    title: "My Profile",
    subTitle: "View profile information",
    link: "/profile",
    // icon: <MyProfileIcon />,
  },
  {
    id: 3,
    title: "Settings",
    subTitle: "Manage your organization settings",
    link: "/settings/employees",
    // icon: <SettingIcon />,
  },
  {
    id: 4,
    title: "Logout",
    subTitle: "Logout from the platform",
    // icon: <LogoutIcon />,
  },
];

export function ProfileDrawer({
  open,
  toggleDrawer,
  user,
}: ProfileDrawerProps): JSX.Element {
  const router = useRouter();
  const [logInModal, setLogInModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);

  function toggleModal(): void {
    setLogInModal(!logInModal);
  }

  function Logout(): void {
    window.location.href = "/sign-in";
  }

  function handleProfileListClick(item: PROFILELINKS): void {
    const { title, link } = item;
    if (title === "Log In as") toggleModal();
    if (title === "Logout") Logout();
    else link && router.push(link);
    toggleDrawer();
  }
  const profileList = profileLinksList;

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        // PaperProps={{
        //   sx: styles.drawerStyle,
        // }}
      >
        <IconButton sx={styles.customCloseIcon} onClick={toggleDrawer}>
          <KeyboardArrowRight />
        </IconButton>
        <Box sx={styles.profileWrapper}>
          <IconButton sx={styles.closeIcon} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <Typography variant="body1" fontWeight="700">
            My Account
          </Typography>
          <Box display="flex" alignItems="center" py={2}>
            {/* {renderUserImage({ ...user, height: 48, width: 48 })} */}
            <Box pl={1.5}>
              <Typography variant="body2" fontWeight="600">
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography variant="subtitle2" fontWeight="400">
                {user?.employeeTitle}
              </Typography>
            </Box>
          </Box>
          <hr />
          {profileList?.map((item: PROFILELINKS) => (
            <Box
              key={item.id}
              onClick={() => {
                handleProfileListClick(item);
              }}
              sx={{ cursor: "pointer" }}
            >
              <Box display="flex" alignItems="center" my={3}>
                <Box sx={styles.profileLinkIcon}>{item.icon}</Box>
                <Box pl={1.5}>
                  <Typography fontWeight="600" variant="subtitle1">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="400"
                    // sx={{
                    //   color: ThemeModeColor("neutral.500", "neutral.300"),
                    // }}
                  >
                    {item.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Drawer>
      {/* login as modal  */}
      {/* <CustomModal
        open={logInModal}
        onClose={toggleModal}
        headerIcon={<LoginIcon />}
        title="Log In as"
        message="You will be able to view Personnel Library as selected employee sees it, but you will not be able to take any actions on behalf of them. A record of this impersonation will also be logged."
        acceptText="Login"
        onAccept={handleLoginAs}
        acceptButtonProps={{ color: "primary", disabled: !userId }}
      >
        <Select
          fullWidth
          name="users"
          value={userId}
          sx={{ mb: "48px" }}
          onChange={({ target: { value } }: SelectChangeEvent) => {
            setUserId(value);
          }}
        >
          {employeesData?.data?.length > 0 &&
            employeesData?.data?.map(({ text, value }) => (
              <MenuItem value={value} key={value}>
                {text}
              </MenuItem>
            ))}
        </Select>
      </CustomModal> */}
    </>
  );
}
