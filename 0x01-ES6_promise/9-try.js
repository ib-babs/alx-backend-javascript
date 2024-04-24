export default function guardrail(mathFUnction = Function) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    queue.push(mathFUnction(), msg);
  } catch (error) {
    queue.push(String(error), msg);
  }
  return queue;
}
