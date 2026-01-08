import { useState } from 'react';
import CustomButton from './CustomButton';

export default function ParentButton() {
  const [loadingBtn, setLoadingBtn] = useState(null);

  const handleClick = (btn) => {
    setLoadingBtn(btn);
    setTimeout(() => setLoadingBtn(null), 1500);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <CustomButton
        variant="primary"
        loading={loadingBtn === 'primary'}
        onClick={() => handleClick('primary')}
      >
        Primary
      </CustomButton>

      <CustomButton
        variant="secondary"
        loading={loadingBtn === 'secondary'}
        onClick={() => handleClick('secondary')}
      >
        Secondary
      </CustomButton>

      <CustomButton
        variant="danger"
        loading={loadingBtn === 'danger'}
        onClick={() => handleClick('danger')}
      >
        Delete
      </CustomButton>

      <CustomButton
        variant="success"
        size="sm"
        loading={loadingBtn === 'small'}
        onClick={() => handleClick('small')}
      >
        Small
      </CustomButton>

      <CustomButton
        variant="info"
        size="lg"
        loading={loadingBtn === 'large'}
        onClick={() => handleClick('large')}
      >
        Large
      </CustomButton>

      <CustomButton
        variant="save"
        loading={loadingBtn === 'save'}
        onClick={() => handleClick('save')}
      >
        Save
      </CustomButton>

      <CustomButton disabled>
        Disabled
      </CustomButton>
    </div>
  );
}
