import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import './Style/BottomBar.scss';
import Zoom from '@material-ui/core/Zoom';
import { useSnackbar, VariantType } from 'notistack';
import { Clear } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

type BottomBarType = { contents: string; header: string; tags: string[]; snackbarKey: any };
const BottomBar: React.FC<BottomBarType> = ({ contents, header, tags, snackbarKey }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onClickDismiss = (key: any) => {
    snackbarKey.current.closeSnackbar(key);
  };

  const snackBar = (variant: VariantType, message: string) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: (key) => {
        return (
          <IconButton
            onClick={() => onClickDismiss(key)}
            aria-label="delete"
            size="small"
            style={{ marginRight: '10px' }}
          >
            <Clear fontSize="inherit" />
          </IconButton>
        );
      },
    });
  };
  const exportContents = (): void => {
    const mergedContents = {
      contents: contents,
      header: header,
      tags: tags,
    };
    console.log(mergedContents);
  };
  const showSnackBar = () => {
    if (contents === '' || header === '') snackBar('error', `제목 또는 내용이 비어있습니다.`);
    else snackBar('success', '포스트가 임시저장되었습니다.');
  };
  return (
    <div className="__bottom__bar">
      <Button variant="outlined" className="button4" startIcon={<ArrowBackIcon />}>
        나가기
      </Button>

      <div className="bottom_solt">
        <button className="button2" onClick={showSnackBar}>
          임시 저장
        </button>
        <button className="button3" onClick={() => exportContents()}>
          출간하기
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
