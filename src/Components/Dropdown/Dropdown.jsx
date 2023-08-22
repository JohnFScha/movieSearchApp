import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Form from '../Form/Form'

export default function Example() {

  return (
    <Popover>
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-black p-2 my-auto bg-white rounded-md">
        <span>Log in</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 mt-5 flex w-screen max-w-max px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 ring-1 ring-gray-900/5">
            <Form />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
