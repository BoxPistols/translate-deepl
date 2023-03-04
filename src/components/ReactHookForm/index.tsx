// @see: https://dev.classmethod.jp/articles/mui-v5-rhf-v7/
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  password: string
  other: string
}

// バリデーションルール
const schema = yup.object({
  email: yup
    .string()
    .required('必須だよ')
    .email('正しいメールアドレス入力してね'),
  name: yup.string().required('必須だよ'),
  password: yup
    .string()
    .required('必須だよ')
    .min(6, '少ないよ')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      'パスワード弱いよ',
    ),
})

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  })

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data)
  }

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField
          required
          label="メールアドレス"
          type="email"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
        />
        <TextField
          required
          label="お名前"
          {...register('name')}
          error={'name' in errors}
          helperText={errors.name?.message}
        />
        <TextField
          required
          label="パスワード"
          type="password"
          {...register('password')}
          error={'password' in errors}
          helperText={errors.password?.message}
        />
        <TextField
          required
          label="その他"
          type="other"
          {...register('other')}
          error={'other' in errors}
          helperText={errors.other?.message}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default ReactHookForm
