import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import './Style/BottomBar.scss';
import Zoom from '@material-ui/core/Zoom';
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack';

type BottomBarType = { contents: string; header: string; tags: string[] };
const BottomBar: React.FC<BottomBarType> = ({ contents, header, tags }) => {
  const { enqueueSnackbar } = useSnackbar();
  const showSnack = (variant: VariantType) => {
    enqueueSnackbar('포스트가 임시저장 되었습니다.', {
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
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

  return (
    <React.StrictMode>
      <SnackbarProvider maxSnack={3}>
        <div className="__bottom__bar">
          <Button variant="outlined" className="button4" startIcon={<ArrowBackIcon />}>
            나가기
          </Button>

          <div className="bottom_solt">
            <button className="button2" onClick={() => showSnack('success')}>
              임시 저장
            </button>
            <button className="button3" onClick={() => exportContents()}>
              출간하기
            </button>
          </div>
        </div>
      </SnackbarProvider>
    </React.StrictMode>
  );
};

export default BottomBar;
