import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <div className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/src/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size="16" />
            Войти
          </Button>
        </div>
      </Container>
    </div>
  );
};
