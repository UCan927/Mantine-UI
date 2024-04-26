import { Box, rem } from '@mantine/core';
import { IconProps } from './types';
import classes from './icons.module.css';

export function RemixIcon({ size = 40, ...others }: IconProps) {
  return (
    <Box
      component="svg"
      __vars={{ '--icon-size': rem(size) }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 512 128"
      className={classes.nextIcon}
      data-large
      {...others}
    >
      <path
        fill="currentColor"
        d="M404.472 38.335v89.493h-32.264V38.335h32.264zm41.606-.176l14.738 21.27 15.136-21.27h33.26l-32.264 42.54L512 127.653h-35.65l-17.724-24.28-17.726 24.28h-33.26l34.853-45.55L410.43 38.16h35.65zm-116.09-2.827c24.252 0 31.522 16.717 31.665 35.158l.002.56v56.184H329.39V79.313l-.006-.72-.01-.707-.018-.693-.023-.678a63.244 63.244 0 00-.014-.334l-.033-.657a53.255 53.255 0 00-.04-.643l-.046-.629a44.966 44.966 0 00-.026-.309l-.058-.608-.065-.593c-.915-7.718-3.901-11.725-11.61-11.725-9.142 0-13.103 6.379-14.086 16.549l-.064.724c-.12 1.46-.18 2.996-.189 4.598l-.001 44.346h-32.264V79.678l-.003-.727c0-.12-.002-.24-.003-.359l-.012-.706-.018-.693-.025-.678-.032-.664a54.24 54.24 0 00-.018-.327l-.043-.643-.05-.629-.057-.615c-.838-8.303-3.885-12.62-11.888-12.62-10.45 0-14.263 8.653-14.338 21.87l-.001 44.347h-32.264V37.74h32.264v13.444c4.78-9.832 14.34-15.852 27.683-15.852 15.734 0 23.899 7.224 27.684 17.658 4.78-10.033 15.335-17.658 30.271-17.658zm-170.42-2.827c29.38 0 45.093 20.06 45.405 44.02l.004.728v9.029H142.64c.797 11.036 8.764 16.253 18.522 16.253 8.65 0 14.195-2.931 17.21-9.76l.117-.272 25.891 2.407c-4.58 20.468-20.912 31.905-44.413 31.905-28.48 0-48.794-17.257-48.794-45.75 0-28.293 20.713-48.56 48.396-48.56zM60.366 0c32.541 0 48.712 15.488 48.712 40.228 0 18.505-11.38 30.573-26.752 32.585 12.977 2.615 20.563 10.057 21.96 24.74l.203 2.7.177 2.524.152 2.362.106 1.78.114 2.1.06 1.2.083 1.904.068 1.8.034 1.033.045 1.657.04 1.894.014.916.025 2.652.008 2.768.001 1.655H71.857c0-.698.006-1.37.014-2.03l.02-1.306.058-3.164.015-1.06.01-1.097.001-.566-.001-1.063-.01-1.115-.014-.876-.027-1.225-.04-1.3-.054-1.381-.068-1.472-.04-.772-.069-1.207-.079-1.268-.122-1.792-.106-1.424C70.417 88.912 65 85.186 55.093 84.73l-.646-.025-.658-.016a54.423 54.423 0 00-.67-.008L0 84.68V58.33h54.376c14.374 0 21.56-4.406 21.56-16.072 0-10.258-7.186-16.475-21.56-16.475H0V0h60.365zM35.483 106.855c4.402 0 6.245 2.445 6.9 4.785l.071.27.032.133.055.267.047.263.02.13.033.257.025.252.01.123.013.243.004.118.003.23v12.572H0v-19.643h35.483zM159.17 55.782c-8.078 0-12.642 3.906-14.826 9.625l-.164.443-.154.45c-.15.454-.285.918-.408 1.39l-.118.477c-.075.32-.145.642-.21.97l-.092.492c-.015.083-.03.166-.043.249l-.08.5-.037.253h31.268c-.399-8.027-5.577-14.85-15.136-14.85zm245.5-54.369v28.494H372.01V1.413h32.662z"
      />
    </Box>
  );
}
