
import Button from './Button';
import Card from './Card';

function ErrorModal(props) {
  return (
    <div className='error-modal'>
    <div className='backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0' onClick={props.onConfirm}></div>
          <Card addClass="w-[36rem] border p-0 z-50">
            <header className='bg-red-700 p-2 text-white rounded-t-xl'>
              <h2 className='text-center text-xl'>{props.error?.title}</h2>
            </header>
            <section className='p-4'>
             {props.error?.message}
            </section>
            <footer className='p-4 flex justify-end'>
              <Button onClick={props.onConfirm}>Tamam</Button>
            </footer>
          </Card>
    </div>
  );
}

export default ErrorModal;
