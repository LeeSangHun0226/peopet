import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Admin.scss';
import classNames from 'classnames/bind';
// import Textarea from '../../atoms/Textarea';
// import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const cx = classNames.bind(styles);

class Admin extends Component {

  state = {
    isSelectedDog: false,
    isSelectedBreeder: false,
  }

  onDogClick = () => {
    this.setState({
      isSelectedDog:true,
      isSelectedBreeder: false,
    })
  }

  onBreederClick = () => {
    this.setState({
      isSelectedDog: false,
      isSelectedBreeder: true,
    })
  }

  renderList = () => {
    const { isSelectedBreeder, isSelectedDog } = this.state;
    const { dogList, breederList } = this.props;
    if (isSelectedBreeder & !isSelectedDog) {
      return (
        <div>
          {
            breederList.map(breeder => (
              <div>
                {breeder.breederName}
              </div>
            ))
          }
        </div>
      )
    }

    if (!isSelectedBreeder & isSelectedDog) {
      return (
        <div>
          {
            dogList.map(dog => (
              <div>
                {dog.dogName}
              </div>
            ))
          }
        </div>
      )
    }

    return;
  }

  render() {
    
    return (
      <div className={cx('admin')}>
        <Button onClick={this.onDogClick}>Dog-List</Button>
        <Button onClick={this.onBreederClick}>Breeder-List</Button>
        <Button onClick={this.onNewBreederClick}>Add Dog</Button>
        <Button onClick={this.onNewBreederClick}>Add Breeder</Button>
        {this.renderList()}

      </div>
    );
  }
}

export default Admin;
// const Admin = () => {

//   const inputData = [
//     {
//       label: '브리더 이름',
//       value: 'breederName'
//     },
//     {
//       label: '브리더 설명',
//       value: 'breederDescription'
//     },
//     {
//       label: '브리더 이미지',
//       value: 'breederImage'
//     },
//     {
//       label: '견사 이름',
//       value: 'kannelName'
//     },
//     {
//       label: '견사 소개',
//       value: 'kannelDescription'
//     },
//     {
//       label: '견사 위치',
//       value: 'kannelLocation'
//     },
//     {
//       label: '견사 운영',
//       value: 'kannelManage'
//     },
//     {
//       label: '분양 견종',
//       value: 'kannelBreed'
//     },
//     {
//       label: '견사 이미지',
//       value: 'kannelImage'
//     },
//     {
//       label: '브리딩을 시작한 계기',
//       value: 'question_start'
//     },
//     {
//       label: '강아지 관리',
//       value: 'question_manage'
//     },
//     {
//       label: '브리딩 마인드',
//       value: 'question_mind'
//     },
//     {
//       label: '예비견주에게 한마디',
//       value: 'question_word'
//     },
//     {
//       label: '강아지 소개',
//       value: 'dogWord'
//     },
//     {
//       label: '강아지 설명',
//       value: 'dogDescription'
//     },
//     {
//       label: '강아지 이미지',
//       value: 'dogImage'
//     },
//   ]

  
// };

// export default Admin;

// render() {
//   return (
//     <div className={cx('admin')}>
//       {inputData.map((data, i) => {
//         return (
//           <div key={i} className={cx('label-container')}>
//             <p className={cx('label')}>{data.label}</p>
//             <Textarea
//               fullWidth
//               name={data.label}
//               // onChange={e => onUpdateValue(e, data.name)}
//               value={data.value ? data.value : ''}
//             />
//           </div>
//         )
//       })}

//     </div>
//   );
// }